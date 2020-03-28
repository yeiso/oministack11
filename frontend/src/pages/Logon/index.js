import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'
export default function Logon () {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name)
            history.push('/profile');
        } catch (err){
            alert ('Falha no login');
        }
    }

    return(
        
     <div className="logon-container">
        <section className="form">
            <img src = {logoImg} alt="imagem" />
        
            <form onSubmit= {handleLogin}>
                <h1>Faça seu logon</h1>
                
                <input 
                placeholder="SUA ID"
                value={id}
                onChange = {e => setId(e.target.value)}
                />
                <button type="submit"className="button">Entrar</button>
                
                <Link className="backlink" to="/register">
                    <FiLogIn size = {16} color = "#e02041" />
                    Não tenho cadastro
                </ Link>
        </form>
        </section>

        <img src = {heroesImg} alt="imagem" />    
     </div>

    );
}