function calc() {
    const diamondTable = [280, 360, 440, 520, 600];
    const stoneTable = [300, 400, 500, 600, 700];
    const magicCoreTable = [150, 200, 250, 300, 350];
    const goldTable = [120000, 160000, 200000, 240000, 280000];

    const TRIAL_COUNT = 10;

    let diamondCount = 0;
    let stoneCount = 0;
    let magicCoreCount = 0;
    let goldCount = 0;

    const chars = [
        {
            radioName: "first",
            starId: "firstStar",
            bookId: "bookStar_f",
            urFlgId: "firstURFlg"
        },
        {
            radioName: "second",
            starId: "secondStar",
            bookId: "bookStar_s",
            urFlgId: "secondURFlg"
        },
        {
            radioName: "third",
            starId: "thirdStar",
            bookId: "bookStar_t",
            urFlgId: "thirdURFlg"
        }
    ];

    chars.forEach(char => {
        const selectedRadio = document.querySelector(
            `input[name="${char.radioName}"]:checked`
        );

        if (!selectedRadio) {
            return;
        }

        let starCount = Number(
            document.getElementById(char.starId).value
        );

        if (isNaN(starCount) || starCount < 0) {
            starCount = 0;
        }

        if (starCount > 30) {
            starCount = 30;
        }

        document.getElementById(char.starId).value =
            starCount;

        const bookRank = Number(
            document.getElementById(char.bookId).value
        );

        const tableIndex = bookRank - 1;

        const bonus =
            document.getElementById(char.urFlgId).checked
                ? 0.5
                : 0;

        const multiplier =
            1.1 + starCount * 0.03 + bonus;

        switch (selectedRadio.id.split("_")[1]) {
            case "d":
                diamondCount +=
                    diamondTable[tableIndex] *
                    multiplier *
                    TRIAL_COUNT;
                break;

            case "m":
                magicCoreCount +=
                    magicCoreTable[tableIndex] *
                    multiplier *
                    TRIAL_COUNT;
                break;

            case "k":
                stoneCount +=
                    stoneTable[tableIndex] *
                    multiplier *
                    TRIAL_COUNT;
                break;

            case "g":
                goldCount +=
                    goldTable[tableIndex] *
                    multiplier *
                    TRIAL_COUNT;
                break;
        }
    });

    const resultElement =
        document.querySelector(".result");

    resultElement.innerHTML = `
        <p>ダイヤ: ${Math.round(diamondCount).toLocaleString()}</p>
        <p>魔核: ${Math.round(magicCoreCount).toLocaleString()}</p>
        <p>強化石: ${Math.round(stoneCount).toLocaleString()}</p>
        <p>金貨: ${Math.round(goldCount).toLocaleString()}</p>
    `;
}