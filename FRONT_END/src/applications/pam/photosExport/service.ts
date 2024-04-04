export const handle_ = (data, fileName, type) => {
  const blob = new Blob([data], { type: type });

  const link = document.createElement("a");

  // Set the link's attributes
  link.href = URL.createObjectURL(blob);
  link.download = fileName;

  // Append the link to the document
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);

  // Reset the progress after the download is complete
};
