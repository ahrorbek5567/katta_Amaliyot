
setTimeout(() => {
    Swal.fire({
    title: 'Yuklanmoqda!',
    text: 'Haftalik hisobot tayyorlanyapti...',
    icon: 'info',
    confirmButtonText: 'Ok'
  });
  function toggleHisobot() {
    Swal.fire({
      title: 'Yuklanmoqda!',
      text: 'Haftalik hisobot tayyorlanyapti...',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  
 }
}, 4000);



  // kodni himoya qilish uchun html shaxadan
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if (e.keyCode == 123 || 
      (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || 
      (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || 
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
    return false;
  }
}


function showHisobot() {
    Swal.fire({
        title: 'Haftalik Hisobot',
        html: `
        <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
          <thead>
            <tr style="background:#f2f2f2;">
              <th style="border:1px solid #999; padding:6px;">№</th>
              <th style="border:1px solid #999; padding:6px;">Kun</th>
              <th style="border:1px solid #999; padding:6px;">Boshlang'ich</th>
              <th style="border:1px solid #999; padding:6px;">Yuqori</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="border:1px solid #999; padding:6px;">1</td><td style="border:1px solid #999; padding:6px;">Dushanba</td><td style="border:1px solid #999; padding:6px;">2000</td><td style="border:1px solid #999; padding:6px;">2500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">2</td><td style="border:1px solid #999; padding:6px;">Seshanba</td><td style="border:1px solid #999; padding:6px;">3000</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">3</td><td style="border:1px solid #999; padding:6px;">Chorshanba</td><td style="border:1px solid #999; padding:6px;">2500</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">4</td><td style="border:1px solid #999; padding:6px;">Payshanba</td><td style="border:1px solid #999; padding:6px;">2800</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">5</td><td style="border:1px solid #999; padding:6px;">Juma</td><td style="border:1px solid #999; padding:6px;">3000</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">6</td><td style="border:1px solid #999; padding:6px;">Shanba</td><td style="border:1px solid #999; padding:6px;">2000</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
            <tr><td style="border:1px solid #999; padding:6px;">7</td><td style="border:1px solid #999; padding:6px;">Yakshanba</td><td style="border:1px solid #999; padding:6px;">3000</td><td style="border:1px solid #999; padding:6px;">3500</td></tr>
          </tbody>
        </table>
        `,
        width: 600,
        confirmButtonText: 'Yopish'
    });
}


function showHisobot() {
    const data = [
        { kun: "Dushanba", boshlangich: 2000, yuqori: 2500 },
        { kun: "Seshanba", boshlangich: 3000, yuqori: 3500 },
        { kun: "Chorshanba", boshlangich: 2500, yuqori: 3500 },
        { kun: "Payshanba", boshlangich: 2800, yuqori: 3500 },
        { kun: "Juma", boshlangich: 3000, yuqori: 3500 },
        { kun: "Shanba", boshlangich: 2000, yuqori: 3500 },
        { kun: "Yakshanba", boshlangich: 3000, yuqori: 3500 },
    ];

    let boshlangichJami = 0;
    let yuqoriJami = 0;

    let tableRows = data.map((item, index) => {
        boshlangichJami += item.boshlangich;
        yuqoriJami += item.yuqori;

        return `<tr>
            <td style="border:1px solid #999; padding:6px;">${index + 1}</td>
            <td style="border:1px solid #999; padding:6px;">${item.kun}</td>
            <td style="border:1px solid #999; padding:6px;">${item.boshlangich}</td>
            <td style="border:1px solid #999; padding:6px;">${item.yuqori}</td>
        </tr>`;
    }).join('');

    const boshlangichOrtacha = Math.round(boshlangichJami / data.length);
    const yuqoriOrtacha = Math.round(yuqoriJami / data.length);

    Swal.fire({
        title: 'Haftalik Hisobot',
        html: `
        <div style="display: flex; gap: 20px;">
            <table style="border-collapse: collapse; width: 65%; font-size: 14px;">
                <thead>
                    <tr style="background:#f2f2f2;">
                        <th style="border:1px solid #999; padding:6px;">№</th>
                        <th style="border:1px solid #999; padding:6px;">Kun</th>
                        <th style="border:1px solid #999; padding:6px;">Boshlang'ich</th>
                        <th style="border:1px solid #999; padding:6px;">Yuqori</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            <div style="width: 35%; font-size: 14px;">
                <h4>Sistema</h4>
                <p>Jami Boshlang'ich: <b>${boshlangichJami.toLocaleString()}</b></p>
                <p>Jami Yuqori: <b>${yuqoriJami.toLocaleString()}</b></p>
                <p>O‘rtacha Boshlang'ich: <b>${boshlangichOrtacha.toLocaleString()}</b></p>
                <p>O‘rtacha Yuqori: <b>${yuqoriOrtacha.toLocaleString()}</b></p>
            </div>
        </div>
        `,
        width: 800,
        confirmButtonText: 'Yopish'
    });
}


