let responseCodes: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (codefilter: number): boolean {
        return codefilter >= 400;
    });
}
console.log("All codes:", responseCodes);
console.log("Failed codes:", getFailedCodes(responseCodes));



let responseCodes1: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes1(code: number[]): number[] {
    return code.filter(function (codefilter: number): boolean {
        return codefilter >= 400;

    })
}
console.log("Failed codes 1:", getFailedCodes1(responseCodes1));


// function getFailedCodes2(code) {
//     return code.filter(function (code) {
//         return code >= 400;

//     })
// }


let responseCode2: number[] = [200, 400, 300, 500, 502];

function getFailedStatus2(code: number[]): number[] {
    return code.filter(function (codefilter: number): boolean {
        return codefilter > 400;

    })

}

console.log("Failed codes 2:", getFailedStatus2(responseCode2));
