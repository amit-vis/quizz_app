const questions = require('./questuion');

// controller for get the answer
module.exports.getquestion = async (req, res)=>{
    try {
        let page = req.query.page || 1;
        let limit = req.query.limit || 1;

        let totalQuestions = questions.length;
        let totalPage = Math.ceil(totalQuestions/limit);

        if(page<1 || page>totalPage){
            return res.status(401).json({
                message: "Invalid page number!",
                success: false
            });
        }

        const startIndex = (page-1)*limit;
        const endIndex = page*limit;

        const currentquestion = questions.slice(startIndex, endIndex);
        if(currentquestion.length === 0){
            return res.status(400).json({
                message: "question not available!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "here is the question",
            success: true,
            question: currentquestion,
            currentPage: page,
            totalPage: totalPage
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in getting the question!!",
            error
        })
    }
}

// controller for submit the answer
module.exports.submitAnswer = async (req, res)=>{
    try {
        let isCorrect=false;
        const userAnswer = req.body.option;
        const questionId = req.body.id
        const correctAnswer = questions[questionId].answer;
        if(userAnswer === correctAnswer){
            isCorrect = true
        }
        return res.status(200).json({
            message: "your answer",
            success: true,
            isCorrect: isCorrect,
            correctAnswer: correctAnswer,
            userAnswer,
            questionId
        })
    } catch (error) {
        console.log(error)
    }
}