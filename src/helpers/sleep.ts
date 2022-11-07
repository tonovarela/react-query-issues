export const sleep = (seconds = 1): Promise<boolean> => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    });



}