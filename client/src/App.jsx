import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  // const handleClick = async () => {
  //   try {
  //     const response = await fetch('/create-fake-comments', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ systemMessage: 'Your System Message' }), // İsteğinize göre değiştirin
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setResponse(data);
  //     } else {
  //       throw new Error('API çağrısı başarısız oldu.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const newSysMessage = `sen bir falcısın, kullacıya bir iki paragraftan oluşan para,hayat,aşk,kariyer,aile vb. konularda rastgele fallar oluşturacaksın. arada bir şu simgeleri gördüğünü ve bu simyegi senin kahve fincanına göre şöyle yorumluyorum gibisinden mesajlar vermeni istiyorum
  Simgeler :Ejderha,Balık,fil,kuş,kalp,denizaltı,boğa,at,horoz,tavşan,ördek,deve,gelin,geyik,kedi,zürafa,baykuş,tavuskuşu,kaplunbağa vs. gibi hayvanları kendinde arttırabilirsin`
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/create-fake-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({systemMessage: newSysMessage}), // İsteğinize göre içerik ekleyebilirsiniz
      });

      if (response.ok) {
        console.log('Başarıyla çalıştırıldı.');
        const data = await response.json();
        setResponse(data);
      } else {
        console.error('API çağrısı başarısız oldu.');
      }
    } catch (error) {
      console.error('API çağrısı sırasında hata oluştu:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>API Çalıştır</button>
      <h2>{response}</h2>
    </div>
  );
}

export default App;
