const Employee = require("../models/employeeSchema")

exports.employeeSubMit = async (req, res) => {
    try {
        const {
            EmpyName,
            role,
            comfort,
            importance,
            change,
            loveConnection,
            growth,
            serving,
            stillness,
            topNeeds,
            FellEmojois,
            EmotionShow,
            mentalClarity,
            emotionalBalance,
            physicalVitality,
            spiritualConnection,
            avoiding,
            needButHesitate,
            innerVoice,
            giveToOthersButNotSelf,
            season,
        } = req.body;

        // 🛑 Basic required fields check
        if (
            !EmpyName ||
            !role ||
            !comfort ||
            !importance ||
            !change ||
            !loveConnection ||
            !growth ||
            !serving ||
            !stillness ||
            !topNeeds ||
            !FellEmojois ||
            !EmotionShow ||
            !mentalClarity ||
            !emotionalBalance ||
            !physicalVitality ||
            !spiritualConnection ||
            !avoiding ||
            !needButHesitate ||
            !innerVoice ||
            !giveToOthersButNotSelf ||
            !season
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields",
            });
        }

        // 🛑 Role check
        if (role !== "employee") {
            return res.status(403).json({
                success: false,
                message: "Only employees are allowed to submit this form.",
            });
        }

        // ✅ Save to DB
        const newEmployee = new Employee({
            EmpyName,
            role,
            comfort,
            importance,
            change,
            loveConnection,
            growth,
            serving,
            stillness,
            topNeeds,
            FellEmojois,
            EmotionShow,
            mentalClarity,
            emotionalBalance,
            physicalVitality,
            spiritualConnection,
            avoiding,
            needButHesitate,
            innerVoice,
            giveToOthersButNotSelf,
            season,
        });

        await newEmployee.save();

        return res.status(201).json({
            success: true,
            message: "Employee submission successful",
            data: newEmployee,
        });
    } catch (error) {
        console.error("❌ Error in employeeSubmit:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server Error in employeeSubmit",
            error: error.message,
        });
    }
};
