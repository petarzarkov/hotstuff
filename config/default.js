module.exports = {
    appName: "hot-utils",
    defaultHttpTimeout: 10000,
    log: {
        level: "TRACE",
        filters: [{
            key: "event",
            values: [
                "/filter/this/event"
            ]
        }],
        serializers: [{
            key: "event",
            values: ["/api"],
            modifiers: [{ properties: ["data.result.results"], regex: "(gender)([^&]+)()" }]
        }]
    }
}