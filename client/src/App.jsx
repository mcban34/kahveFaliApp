import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const [response, setResponse] = useState('');



  //!falı yapay zekadan çeken fonksiyon
  const newSysMessage = `sen bir falcısın, kullacıya bir iki paragraftan oluşan para,hayat,aşk,kariyer,aile vb. konularda rastgele fallar oluşturacaksın. arada bir şu simgeleri gördüğünü ve bu simyegi senin kahve fincanına göre şöyle yorumluyorum gibisinden mesajlar vermeni istiyorum
  Simgeler :Ejderha,Balık,fil,kuş,kalp,denizaltı,boğa,at,horoz,tavşan,ördek,deve,gelin,geyik,kedi,zürafa,baykuş,tavuskuşu,kaplunbağa vs. gibi hayvanları kendinde arttırabilirsin. Kullancıya İşte Fincanına Ait Kahve Falın : "gelecek fal" olarak mesajını göndermeni istiyorum`
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/create-fake-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ systemMessage: newSysMessage }),
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
    <div className='App'>
      <div className="falApp">
      </div>
      <Container>
        <button onClick={handleClick}>Falmı Getir</button>
        <h2>{response}</h2>
        {/* <button>Falı Göster</button> */}
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius lobortis dui. Aenean venenatis gravida ex non rutrum. Morbi ut lacus ante. Curabitur feugiat mi ante, sit amet lacinia erat elementum nec. Proin sagittis, nulla eget pretium imperdiet, arcu quam sodales enim, sit amet maximus arcu quam a felis. Duis lobortis congue interdum. Duis iaculis ut nulla a facilisis. Nam eleifend at arcu sed finibus. Etiam cursus ipsum arcu, ut tincidunt magna feugiat hendrerit. Cras aliquet felis sed est gravida gravida. Donec at tincidunt arcu. Praesent semper turpis ut turpis varius, nec sagittis ante iaculis.

          Vivamus cursus sem sed orci commodo aliquam. Phasellus consequat lorem vitae finibus mollis. Suspendisse vestibulum nec turpis eu pellentesque. Suspendisse ut congue leo. Sed pulvinar fermentum nulla quis posuere. Donec placerat diam consectetur ligula vulputate tempus. Suspendisse potenti. Maecenas elementum dui nec nisl faucibus, sit amet vestibulum arcu sodales. In nec tempus ipsum. Proin ac finibus leo. Vestibulum ultricies finibus diam ac eleifend. Etiam nec feugiat orci. In et libero maximus urna dictum pretium nec sit amet nisl. Vestibulum faucibus tincidunt lorem nec congue. Aliquam ultrices pellentesque turpis sit amet tristique.</p>
      */}
      </Container>
    </div>
  );
}

export default App;
