const risk_analisis_data =  [
    {
        option: "Value of the project",

        file: "Project",
        values: ["<=200,000", ">200,000=<500,000", ">500,000=<1,000,000", ">1000000=<3000000", ">3,000,000"],
        scores: [7, 5.5, 4, 2.5, 1],
        weightings: [10, 7.9, 5.7, 3.6, 1.4]
    },
    {
        option: "Type of the project",


        file: "Project",
        values: ["Government", "Commerical", "Residental"],
        scores: [5.25, 3.25, 1.15],
        weightings: [7.5, 4.6, 1.6]
    },
    {
        option: "Location of the project",
        file: "Project",
        values: ["<=50 km from Contrctor", ">50 km =<120 km from Contrctor", ">120 km from Contrctor"],
        scores: [5.2, 3.25, 1.15],
        weightings: [7.5, 4.6, 1.6]
    },
    {
        option: "Timeline of the project",

        file: "Project",
        values: ["<=30 days", ">30 days =<60 days", ">60 days =<90 days", ">90 days =<120 days", ">120 days"],

        scores: [17.5, 14.5, 11.5, 8.5, 5.5],
        weightings: [25, 20.7, 16.4, 12.1, 7.9]
    },
    {
        option: "*Client/GC/ Project's owner Type",

        file: "Project",
        values: ["Commerical", "Residental", "Semi-Government", "Government", "Politician (VIP)"],
        scores: [10.5, 8.5, 6.5, 4.5, 2.5],
        weightings: [15, 12.1, 9.3, 6.4, 3.6]
    },
    {
        option: "*Client/GC/ Project's owner Size",

        file: "Project",
        values: ["Very Large", "Large", "Medium", "Small", "Micro-Small"],
        scores: [10.5, 8.5, 6.5, 4.5, 2.5],
        weightings: [15, 12.1, 9.3, 6.4, 3.6]
    },
    {
        option: "*Client/GC/ Project's owner Reputation",

        file: "Project",
        values: ["High or evident", "Strong", "Good", "Average or reducing", "Questionable or weak"],
        scores: [14, 11, 7, 4, 1],
        weightings: [20, 15.7, 10, 5.7, 1.4]
    },
    {
        option: "Classification Certificate Grade",
        values: ["1 or 2", "3 or 4", "5 or 6", "7", "Not applicable"],
        file: "Business",
        scores: [7.5, 6, 4.5, 3, 1.5],
        weightings: [25, 20, 15, 10, 5]
    },


    {
        option: "Experience in the field",


        file: "Business",
        values: ["More than 5 Years", "3-5 Years", "2-3 Years", "1-2 Years", "Less than 1 Year"],

        scores: [10.5, 8.25, 6, 3.75, 1.5],
        weightings: [35, 27.5, 20, 12.5, 5]
    },
    {
        option: "Saudization/Commitment",


        file: "Business",
        values: ["Excellent", "Green", "Not applicable (Mico-Small)", "Yellow", "Red"],
        scores: [4.5, 3.75, 3, 2.25, 1.5],
        weightings: [35, 27.5, 20, 12.5, 5]
    },

    {
        option: "Quality of management",


        file: "Business",


        values: ["High or evident", "Strong", " Good", "Average or reducing", "Questionable or weak"],
        scores: [7.5, 6, 4.5, 3, 1.5],
        weightings: [25, 20, 15, 10, 5]
    },



];