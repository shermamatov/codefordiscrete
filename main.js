let testQuestions = [
    {
        question:
            "Match the following hexadecimal notations to their corresponding binary notations which are given in the four (4) questions below:",
        multiSelect: true,
        answer: {
            A: "(135AB)16",
            B: "(DEFACED)16",
            C: "(ABBA)16",
            D: "(80E)16",
        },
    },
    {
        question:
            "Let p, q, and r be the propositions p: You get an A on the final exam.q: You do every exercise in this book.r: You get an A in this class. For the three (3) questions in the statements given below in English languages, find the corresponding correct expressions among those which are listed here, in terms of the propositions p, q, and r and logical connectives.",
        multiSelect: true,
        answer: {
            D: "You get an A in this class, but you do not do every exercise in this book.",
            E: "You will get an A in this class if and only if you either do every exercise in this book or you get an A on the final",
            C: "You get an A on the final, but you don’t do every exercise in this book; nevertheless, you get an A in this class.",
        },
    },
    {
        question:
            'Given the predicate symbols: D(x): "x is a dog." R(x): "x is a rabbit." C(x,y): "x chases y." For the three (3) questions of statements in English language given below, find the corresponding correct answer among the choices listed here:',
        multiSelect: true,
        answer: {
            A: "ALL DOGS CHASE ALL RABBITS.",
            B: "SOME DOGS CHASE ALL RABBITS.",
            C: "ONLY DOGS CHASE ALL RABBITS.",
        },
    },
    {
        question:
            "FOR THE STATEMENT GIVEN IN DOUBLE QUOTATION 'All lions are predator', WHICH ONE IS THE CORRECT WFF? Note that: A well-formed formula, (wff) is a simply formula, which is a finite sequence of symbols from a given alphabet that is part of a formal language. For example, here the first alphabet of the key words for the proposition 'x is a lion' and 'x is a predator'.",
        multiSelect: false,
        answer: "∀𝑥 [L(x) > P(x)]",
    },
    {
        question:
            "Which one of the following is the correct arrangement of the complexity functions f(n)'s given below in an increasing order as n grows without bound, where n is for example the estimate the number of operations needed to solve a problem using a specific procedure or algorithm.",
        multiSelect: false,
        answer: "nlogn, n², 2ⁿ, n!",
    },
    {
        question:
            "What is the truth value of the statement ∀n(n + 1 > n) if the universe of discourse for the variable consists of all integers?",
        multiSelect: false,
        answer: "True",
    },
    {
        question:
            "Given a statement of the form p → q, it is sufficient to assume it's false, then you only have to consider the case where p is true and q is false.",
        multiSelect: false,
        answer: "True",
    },
    {
        question:
            'Let Q(x, y) be the statement "x + y = x - y." If the universe of discourse for the variables consists of all integers, what is the truth values of ∀x∀y Q(x, y)?',
        multiSelect: false,
        answer: "True",
    },
    {
        question:
            'From the defn of the fact that f(x) is O(x) which of the following are the correct pairs of witnesses "C" and "k" fulfilling f(x) = 2^x + 15 as O(3^x), respectively.',
        multiSelect: true,
        answer: {
            multi1: "5, 2",
            mulit2: "2, 4",
        },
    },
    {
        question:
            'Is the combined proposition (p → (q → r)) → ((p → q) → (p → r)) a "tautology"?',
        multiSelect: false,
        answer: "True",
    },
    {
        question:
            'From the definition of the fact that f(x)f(x) is O(x)O(x) which of the following are the correct pairs of witnesses "C" and "k" fulfilling f(x)=x**3+15 as O(x4), respectively',
        multiSelect: true,
        answer: {
            multi1: "16, 1",
            multi2: "2, 2",
            mulit3: "1, 3",
        },
    },
    {
        question:
            "Which of the following is true about pseudo-random number generators (PRNGs) using modular arithmetic?",
        multiSelect: true,
        answer: "They generate numbers that eventually repeat (periodic).",
    },
    {
        question:
            "What is the cycle length of the LCG X n+1  =(4X n  +1)mod 9 starting from X 0  =0?",
        multiSelect: true,
        answer: "9",
    },
    {
        question: "What is the result of 45 mod 7",
        multiSelect: true,
        answer: "3",
    },
    {
        question:
            "What does it mean if an algorithm has time complexity 𝑂(1) O(1)?",
        multiSelect: true,
        answer: "The running time is constant regardless of input size",
    },
];

function findAnswer(inputQuestion) {
    const normalizedInput = inputQuestion.toLowerCase().trim();
    for (const item of testQuestions) {
        // if (
        //     item.question.toLowerCase().includes(normalizedInput) ||
        //     normalizedInput.includes(item.question.toLowerCase())
        // ) {
        //     if (item.multiSelect) {
        //         let answerText = Object.entries(item.answer)
        //             .map(([key, value]) => `${key}: ${value}`)
        //             .join("\n");
        //         alert(`${item.question}\n\n${answerText}`);
        //     } else {
        //         console.log(`вопрос: ${item.question}`);
        //         console.log("ответ:", item.answer);
        //     }
        //     return;
        // } else {
        const partialMatches = testQuestions.filter(
            (item) =>
                item.question.toLowerCase().includes(normalizedInput) ||
                normalizedInput.includes(
                    item.question.toLowerCase().substring(0, 10)
                )
        );
        if (partialMatches.length > 0) {
            for (let i of partialMatches) {
                console.log(i);
                if (i.multiSelect) {
                    let answerText = Object.entries(i.answer)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join("\n");
                    alert(`${i.question}\n\n${answerText}`);
                } else {
                    alert(`вопрос: ${i.question}\n\n ответ: ${i.answer}`);
                }
            }
            return;
        } else {
            alert("sorry not found");
            return;
        }
        // }
    }
}

findAnswer(prompt("input"));
