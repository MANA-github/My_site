function calc() {
    let totalPrice = 0;
    let totalItems = 0;

    const flgData = {
        doubleEvent: false,
        free: false
    };

    const giftTable = {
        '100': { price: 100, items: 3 },
        '480': { price: 480, items: 10 },
        '1080': { price: 1080, items: 15 },
        '1980': { price: 1980, items: 25 },
        '4980': { price: 4980, items: 60 },
        '9800': { price: 9800, items: 120 },
        's_p': { price: 1080, items: 60},
        'g_p': { price: 9800, items: 150}
    };

    const periodDays = Number(
        document.getElementById("period").value
    );

    const flgCheckBoxes = document.querySelectorAll(
        '.flg-checkbox-group input[type="checkbox"]'
    );

    const giftCheckBoxes = document.querySelectorAll(
        '.gift-checkbox-group input[type="checkbox"]'
    );

    flgCheckBoxes.forEach(cb => {
        if (cb.checked && cb.id in flgData) {
            flgData[cb.id] = true;
        }
    });

    giftCheckBoxes.forEach(cb => {
        if (cb.checked && giftTable[cb.id]) {
            const data = giftTable[cb.id];
            if (cb.id === 's_p' || cb.id === 'g_p') {
                totalPrice += data.price*((periodDays==1)?1:periodDays/7);
                totalItems += data.items*((periodDays==1)?1:periodDays/7);
            }
            else {
                totalPrice += data.price*((periodDays==1)?1:periodDays);
                totalItems += data.items*((periodDays==1)?1:periodDays);
            }
        }
    });

    if (flgData.doubleEvent) { totalPrice*=2; totalPrice*=2;}
    if (flgData.free) { totalItems+=30;}

    const ansElement = document.querySelector('.calc-ans p');

    ansElement.textContent =`合計金額: ${totalPrice}円 / 合計個数: ${totalItems}個`;
}