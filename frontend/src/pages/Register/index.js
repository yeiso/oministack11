import React, {useState} from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'





export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    
    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }



    return (
        <div className = "register-container">
            <div className = "content">
                
                <section>
                    <img src = {logoImg} alt="imagem" />
                
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro text text text bla bla  asdkajalskakjsd lakjsld akjs lakj ldabla</p>
                
                    <Link className = "backlink" to="/">
                        <FiArrowLeft size = {16} color = "#e02041" />
                        Voltar a tela de Logon
                    </ Link>
                    </section>
                
                <form onSubmit={handleRegister} >
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    placeholder="Email" type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="UF" style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button type="submit" className= "button">Cadastrar ONG</button>
                </form>     
            </div>
        </div>
    );
}