function calc() {
    const diamondTable = [280, 360, 440, 520, 600];
    const stoneTable = [300, 400, 500, 600, 700];
    const magicCoreTable = [150, 200, 250, 300, 350];
    const goldTable = [120000, 160000, 200000, 240000, 280000];

    let diamondCount = 0;
    let stoneCount = 0;
    let magicCoreCount = 0;
    let goldCount = 0;

    const chars = [
        {
            radioName: "first",
            starId: "firstStar",
            bookId: "bookStar_f"
        },
        {
            radioName: "second",
            starId: "secondStar",
            bookId: "bookStar_s"
        },
        {
            radioName: "third",
            starId: "thirdStar",
            bookId: "bookStar_t"
        }
    ];

    chars.forEach(char => {
        const selectedRadio = document.querySelector(
            `input[name="${char.radioName}"]:checked`
        );

        if (!selectedRadio) return;

        const starCount = Number(
            document.getElementById(char.starId).value
        );

        const bookRank = Number(
            document.getElementById(char.bookId).value
        );

        if (!starCount || !bookRank) return;

        const tableIndex = bookRank - 1;

        switch (selectedRadio.id.split("_")[1]) {
            case "d":
                diamondCount +=
                    diamondTable[tableIndex] * starCount;
                break;

            case "m":
                magicCoreCount +=
                    magicCoreTable[tableIndex] * starCount;
                break;

            case "k":
                stoneCount +=
                    stoneTable[tableIndex] * starCount;
                break;

            case "g":
                goldCount +=
                    goldTable[tableIndex] * starCount;
                break;
        }
    });

    console.log("ダイヤ:", diamondCount);
    console.log("魔核:", magicCoreCount);
    console.log("強化石:", stoneCount);
    console.log("金貨:", goldCount);

    const resultElement =
        document.querySelector(".result");

    if (resultElement) {
        resultElement.innerHTML = `
            <p>ダイヤ: ${diamondCount.toLocaleString()}</p>
            <p>魔核: ${magicCoreCount.toLocaleString()}</p>
            <p>強化石: ${stoneCount.toLocaleString()}</p>
            <p>金貨: ${goldCount.toLocaleString()}</p>
        `;
    }
}