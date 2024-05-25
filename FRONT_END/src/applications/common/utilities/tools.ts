import axios from "axios";
import { exportToPhotoUrl } from "../../../redux/RtkQueryApis/constants";
import { thumbSizes } from "../../pam/photosExport/ExportDialog";
import { handle_ } from "../../pam/photosExport/service";

import "./tools.css";

export const downloadPhoto = async (matricule) => {
  try {
    // Send a GET request to the Spring Boot endpoint with progress tracking
    const response = await axios.post(
      exportToPhotoUrl,
      {
        sizes: thumbSizes.map((item) => item.size),
        filteringParams: {
          searchToken: matricule,
        },
      },
      {
        responseType: "arraybuffer",
        onDownloadProgress: (progressEvent) => {
          // Calculate and update the download progress
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          console.log(progressEvent);
        },
      },
    );
    handle_(response.data, "export.zip", "application/zip");
  } catch (error) {
    console.error("Error exporting images:", error);
  }
};

export const highlightSearchToken = (text, searchToken) => {
  if (!searchToken || !text) {
    return { __html: text };
  }

  const regex = new RegExp(`(${searchToken})`, "gi");
  const highlightedText = text.replace(regex, "<mark>$1</mark>");
  return { __html: highlightedText };
};

export const highlightSearchTokenWithSpan = (text, searchToken) => {
  if (!searchToken || !text) {
    return { __html: text };
  }
  const regex = new RegExp(`(${searchToken})`, "gi");
  const highlightedText = text.replace(
    regex,
    '<span class="highlight">$1</span>',
  );
  return { __html: highlightedText };
};
