import * as https from "https";
// import * as fs from "fs"

import axios from "axios";
import {elasticUrl} from "../../../../../redux/RtkQueryApis/constants";

export async function searchJsonField(searchedToken) {
    try {
        const response = await axios.get(`${elasticUrl}ocr_index/_search`, {
            body: JSON.stringify({
                query: {
                    nested: {
                        path: "pages.paragraphs.lines",
                        query: {
                            fuzzy: {
                                "pages.paragraphs.lines.text": {
                                    value: searchedToken,
                                    fuzziness: 1
                                }
                            }
                        },
                        inner_hits: {}
                    }
                }
            }),
            httpsAgent: new https.Agent({
                // ca : fs.readFileSync("src/certificate/http_ca.crt") ,
                rejectUnauthorized: false
            }),
            headers: {
                'Authorization': 'Basic ' + btoa('elastic:4yFp65hePoi27OGzUYV='),
                // 'Authentication': 'Basic ' + btoa('elastic:4yFp65hePoi27OGzUYV=')
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export default searchJsonField;
