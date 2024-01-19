const testData = {
    0: {
        isIncome: true,
        isRoot: true,
        name: "Food",
        color: "#E5CCFF",
        level: 1,
        children: {
            "00": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Homemade",
                color: "#CC99FF"
            },
            "03": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Sweets & Chips",
                color: "#6600CC",
                children: {
                    "031": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Chips",
                        color: "#FF99FF",
                        children: {
                            "0311": {
                                root: 0,
                                parent: "031",
                                level: 4,
                                name: "Potato",
                                color: "#FF99FF",
                                children: {
                                    "03111": {
                                        root: 0,
                                        parent: "0311",
                                        level: 5,
                                        name: "Chitos",
                                        color: "#FF99FF",
                                    }
                                }
                            }
                        }
                    },
                    "032": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Sweets",
                        color: "#FF66B2"
                    },
                }
            },
            "02": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Restaurants",
                color: "#9933FF"
            }
        }
    },
    1: {
        isRoot: true,
        name: "Not food",
        color: "#E5CCFF",
        level: 1,
        children: {
            "00": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Homemade",
                color: "#CC99FF"
            },
            "03": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Sweets & Chips",
                color: "#6600CC",
                children: {
                    "031": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Chips",
                        color: "#FF99FF",
                        children: {
                            "0311": {
                                root: 0,
                                parent: "031",
                                level: 4,
                                name: "Potato",
                                color: "#FF99FF",
                                children: {
                                    "03111": {
                                        root: 0,
                                        parent: "0311",
                                        level: 5,
                                        name: "Chitos",
                                        color: "#FF99FF",
                                    }
                                }
                            }
                        }
                    },
                    "032": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Sweets",
                        color: "#FF66B2"
                    },
                }
            },
            "02": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Restaurants",
                color: "#9933FF"
            }
        }
    },
    2: {
        isRoot: true,
        name: "Other",
        color: "#E5CCFF",
        level: 1,
        children: {
            "00": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Homemade",
                color: "#CC99FF"
            },
            "03": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Sweets & Chips",
                color: "#6600CC",
                children: {
                    "031": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Chips",
                        color: "#FF99FF",
                        children: {
                            "0311": {
                                root: 0,
                                parent: "031",
                                level: 4,
                                name: "Potato",
                                color: "#FF99FF",
                                children: {
                                    "03111": {
                                        root: 0,
                                        parent: "0311",
                                        level: 5,
                                        name: "Chitos",
                                        color: "#FF99FF",
                                    }
                                }
                            }
                        }
                    },
                    "032": {
                        root: 0,
                        parent: "03",
                        level: 3,
                        name: "Sweets",
                        color: "#FF66B2"
                    },
                }
            },
            "02": {
                root: 0,
                parent: 0,
                level: 2,
                name: "Restaurants",
                color: "#9933FF"
            }
        }
    }
}

const diagramData = [
    {
        total: 5,
        fillColor: "black",
        name: "Горох"
    },
    {
        total: 8,
        fillColor: "green",
        name: "Финтифлюшки",
        details: [
            {
                total: 8,
                fillColor: "green",
                name: "Сирошки"
            },
            {
                total: 10,
                fillColor: "green",
                name: "Не сирошки"
            },
        ]
    },
    {
        total: 1,
        fillColor: "red",
        name: "Синхрофазатрон"
    },
    {
        total: 5,
        fillColor: "blue",
        name: "Беляш"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Ядерный синтез"
    },
    {
        total: 15,
        fillColor: "magenta",
        name: "Греча",
        details: [
            {
                total: 3,
                fillColor: "magenta",
                name: "Греча варёная",
            },
            {
                total: 7,
                fillColor: "magenta",
                name: "Греча жареная",
            },
            {
                total: 5,
                fillColor: "magenta",
                name: "Просто греча",
            },
            {
                total: 7,
                fillColor: "magenta",
                name: "Греча с яйцом",
            },
            {
                total: 2,
                fillColor: "magenta",
                name: "Поддельная греча (рис)",
            },
            {
                total: 7,
                fillColor: "magenta",
                name: "Греча жареная",
            },
            
        ]
    },
    {
        total: 5,
        fillColor: "blue",
        name: "Фуфел"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Шмель"
    },
    {
        total: 10,
        fillColor: "magenta",
        name: "Гарри Поттер"
    },
    {
        total: 20,
        fillColor: "blue",
        name: "Коты"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Котлетки",
        details: [
            {
                total: 3,
                fillColor: "magenta",
                name: "Куриные",
            },
            {
                total: 5,
                fillColor: "magenta",
                name: "Говяжьи",
            },
            {
                total: 3,
                fillColor: "magenta",
                name: "Индюшачьи",
            },
            {
                total: 3,
                fillColor: "magenta",
                name: "Свиные",
            },
        ]
    },
    {
        total: 13,
        fillColor: "magenta",
        name: "Врюфень"
    }
]

const diagramData2 = [
    {
        total: 15,
        fillColor: "black",
        name: "Горох"
    },
    {
        total: 8,
        fillColor: "green",
        name: "Финтифлюшки"
    },
    {
        total: 1,
        fillColor: "red",
        name: "Синхрофазатрон"
    },
    {
        total: 5,
        fillColor: "blue",
        name: "Беляш"
    },
    {
        total: 17,
        fillColor: "cyan",
        name: "Ядерный синтез"
    },
    {
        total: 35,
        fillColor: "magenta",
        name: "Греча",
    },
    {
        total: 1,
        fillColor: "blue",
        name: "Фуфел"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Шмель"
    },
    {
        total: 15,
        fillColor: "magenta",
        name: "Гарри Поттер"
    },
    {
        total: 20,
        fillColor: "blue",
        name: "Коты"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Котлетки"
    },
    {
        total: 13,
        fillColor: "magenta",
        name: "Врюфень"
    }
]

const diagramData3 = [
    {
        total: 1,
        fillColor: "black",
        name: "Горох"
    },
    {
        total: 3,
        fillColor: "green",
        name: "Финтифлюшки"
    },
    {
        total: 1,
        fillColor: "red",
        name: "Синхрофазатрон"
    },
    {
        total: 9,
        fillColor: "blue",
        name: "Беляш"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Ядерный синтез"
    },
    {
        total: 20,
        fillColor: "magenta",
        name: "Греча",
    },
    {
        total: 5,
        fillColor: "blue",
        name: "Фуфел"
    },
    {
        total: 17,
        fillColor: "cyan",
        name: "Шмель"
    },
    {
        total: 10,
        fillColor: "magenta",
        name: "Гарри Поттер"
    },
    {
        total: 30,
        fillColor: "blue",
        name: "Коты"
    },
    {
        total: 7,
        fillColor: "cyan",
        name: "Котлетки"
    },
    {
        total: 13,
        fillColor: "magenta",
        name: "Врюфень"
    }
]

const outcome = [
    {
        total: 1,
        fillColor: "black",
        name: "Нологе"
    },
    {
        total: 4,
        fillColor: "green",
        name: "Еда"
    },
    {
        total: 2,
        fillColor: "red",
        name: "Материалы"
    }
]

const outcome2 = [
    {
        total: 2,
        fillColor: "black",
        name: "Нологе"
    },
    {
        total: 3,
        fillColor: "green",
        name: "Еда"
    },
    {
        total: 114,
        fillColor: "red",
        name: "Материалы"
    }
]

const outcome3 = [
    {
        total: 1,
        fillColor: "black",
        name: "Нологе"
    },
    {
        total: 2,
        fillColor: "green",
        name: "Еда"
    },
    {
        total: 42,
        fillColor: "red",
        name: "Материалы"
    }
]
export {testData, diagramData, diagramData2, diagramData3, outcome, outcome2, outcome3}