export const calculateMean = (data) => {
    const total = data.reduce((acc, curr) => acc + Number(curr), 0);
    return (total / data.length).toFixed(3);
};

export const calculateMedian = (data) => {
    const sortedData = data.sort((a, b) => Number(a) - Number(b));
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
        return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(3);
    } else {
        return (sortedData[middle]).toFixed(3);
    }
};

export const calculateMode = (data) => {
    const map = {};
    data.forEach(item => {
        map[Number(item)] = (map[Number(item)] || 0) + 1;
    });

    let mode;
    let maxFreq = -1;
    for (const key in map) {
        if (map[key] > maxFreq) {
            maxFreq = map[key];
            mode = parseFloat(key);
        }
    }
    return mode.toFixed(3);
};