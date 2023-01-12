import type { DetailsType } from "../types";

export const javascript: DetailsType = {
    title: "Javascript (navigateur)",
    contents: [
        "Ecmascript",
        "DOM",
        "AJAX",
        "XHR",
        {
            title: "Base du language",
            contents: [
                "hoisting",
                "scope",
                {title: "var / let / const", url:"courses/js/les-variables", isNew:true},
                "Math",
                "switch",
                "conditions",
                "ternaire",
                "operateur logique",
                "use strict",
                {
                    title: "boucle",
                    contents: ["for", "for in", "for of", "while", "do while"],
                },
                {
                    title: "variable",
                    contents: [
                        {
                            title: "primitive",
                            contents: [
                                "boolean",
                                "number",
                                "String",
                                "undefined",
                                "Synbol",
                                "NaN",
                                "null",
                                "Circular",
                            ],
                        },
                        {
                            title: "Complexe",
                            contents: [
                                "JSON",
                                "Map",
                                "Set",
                                "Proxi",
                                {
                                    title: "Array",
                                    contents: [
                                        "foreach",
                                        "map",
                                        "filter",
                                        "reduce",
                                        "autres",
                                    ],
                                },
                                { title: "Object", contents: [] },
                            ],
                        },
                    ],
                },

                "Destructuration",
                "Spread opératuer",
                "closue",
                "Curring",
                {
                    title: "Asyncrone",
                    contents: ["callback", "then", "async / await"],
                },
                {
                    title: "Fonction",
                    contents: [
                        "Arrow",
                        "Auto invoked",
                        "generator",
                        "r2cursiviter",
                    ],
                },
            ],
        },
    ],
};