import React, {useState} from 'react';

import './styles.css';
import { Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'

import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [descripition, setDescripition] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            descripition,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch(err){
            alert('Erro ao cadastrar')
        }
    }

    return (
        <div className = "new-incident-container">
            <div className = "content">
                
                <section>
                    <img src = {logoImg} alt="imagem" />
                
                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro text text text bla bla  asdkajalskakjsd lakjsld akjs lakj ldabla</p>
                
                    <Link className = "backlink" to="/profile">
                        <FiArrowLeft size = {16} color = "#e02041" />
                        Voltar para a tela de casos
                    </ Link>
                    </section>
                
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e =>setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição do caso"
                        value={descripition}
                        onChange={e =>setDescripition(e.target.value)}
                        />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e =>setValue(e.target.value)}
                        />


                    <button type="submit" className= "button">Cadastrar caso</button>
                </form>     
            </div>
        </div>
    )
};