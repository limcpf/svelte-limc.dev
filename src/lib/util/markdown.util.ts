export interface toc {
    main: string,
    sub: string[]
}

export const generatorHeaderId = (header:string) => encodeURI(header.replaceAll(" ", "-"));

export const generatorToc = (content: string) => {
    const headers = content.split("\n").filter((str) => str.startsWith("##"));
    return headers.join("\n");
}

// const getTocFromHeaders = (headers: string[]) => {
//     const tocList: toc[] = [];
//
//     const toc: toc= {
//         main: "",
//         sub: []
//     }
//
//     for(const h of headers) {
//         if(h.startsWith("## ")) {
//             if(toc.main) {
//                 tocList.push({...toc});
//                 toc.main = "";
//                 toc.sub = [];
//             }
//
//             toc.main = h;
//         } else if(h.startsWith("### ")) {
//             if(!toc.main) tocList.push({main: h, sub: []});
//             else toc.sub.push(h)
//         }
//     }
//
//     return tocList;
// }