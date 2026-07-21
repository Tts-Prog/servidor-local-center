export const options = {
    stages: [
        { duration: "30s", target: 50 },
        { duration: "1m", target: 200 }, // 200 utilizadores em simultâneo!
        { duration: "30s", target: 0 },
    ],
};