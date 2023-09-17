import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Home() {
    const [response, setResponse] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [relationship, setRelationship] = useState('İlişki');
    const [career, setCareer] = useState('Kariyer');
    const [gender, setGender] = useState('Cinsiyet');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Yüklenme durumu eklendi
    const [selectedImage, setSelectedImage] = useState(null); // Seçilen resim verisi
    const [isImageSelected, setIsImageSelected] = useState(false); // Resim seçildi mi?

    const navigate = useNavigate()

    useEffect(() => {
        if (name && age && relationship !== 'İlişki' && career !== 'Kariyer' && gender !== 'Cinsiyet' && isImageSelected) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, age, relationship, career, gender, isImageSelected]);

    const newSysMessage = `sen bir falcısın, kullanıcının sana verdiği bilgiler;
    Adı : xxxx,
    İlişki Durumu : xxx,
    Yaş : xxxx,
    Cinsiyet : xxxx,
    kullanıcıdan aldığın bilgilere göre kullanıcıya hitap ederek ona bir fal yazmanı istiyorum.
    bazen olumsuz durumlardan bazen olumlu durumlardan bahsetmeni istiyorum.
    Falın genel konu başlıkları: aile, hayat, iş hayatı, ilişki, para vb.
    `;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
                setIsImageSelected(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const response = await fetch('http://localhost:5000/create-fake-comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        systemMessage: newSysMessage,
                        appName: name,
                        appAge: age,
                        appRelationship: relationship,
                        appCareer: career,
                        appGender: gender,
                    }
                ),
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
        } finally {
            setIsLoading(false);
            
        }
    };

    return (
        <div className='homeApp'>
            <Container>
                <Row className='justify-content-center align-items-center vh-100'>
                    <Col md={6} className='text-md-center'>
                        <img className='homeAppHeaderImg' src="http://localhost:3000/img/homeHeader.jpg" alt="" />
                        <form onSubmit={handleClick}>
                            <input type="text" placeholder='Adınız' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="number" placeholder='Yaşınız' value={age} onChange={(e) => setAge(e.target.value)} /> <br />
                            <select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                                <option disabled>İlişki</option>
                                <option>İlişki Var</option>
                                <option>İlişki Yok</option>
                            </select> <br />
                            <select value={career} onChange={(e) => setCareer(e.target.value)}>
                                <option disabled>Kariyer</option>
                                <option>Çalışma Var</option>
                                <option>Çalışma Yok</option>
                            </select> <br />
                            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option disabled>Cinsiyet</option>
                                <option>Kadın</option>
                                <option>Erkek</option>
                                <option>Belirtmek İstemiyor</option>
                            </select> <br />
                            <img width={200} className={isImageSelected == false ? 'disabled-img' : 'enabled-img'} src={selectedImage} alt="Seçilen Resim" />
                            <input type="file" onChange={handleImageChange} className='inputFile' />
                            <label>
                                {
                                    isImageSelected== false ? "Lütfen Fincan Fotoğrafınızı Seçin" : "Fincan Resimi Seçildi!"
                                }
                            </label>
                            <button type="submit" className='falGonder' disabled={!isFormValid || isLoading}>
                                {isLoading ? 'Kahve falın yükleniyor...' : 'Gönder'}
                            </button>
                        </form>
                    </Col>
                </Row>

            </Container>
            <p>{response}</p>
        </div>
    )
}

export default Home;
