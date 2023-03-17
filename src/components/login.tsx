import React from 'react';
import '../index.css';
import logo from '../assets/logo.png';

export default function Login() {
    return (
        <>


            <div className='flex flex-col pl-28 pt-14 w-736 h-900'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>

                <div className='mt-36'>
                    <div className='h-119 pt-2'>
                        <div className='mb-4'>
                            <h1 className='text-3xl font-bold text-gray800'>Acesse a plataforma</h1>
                        </div>
                        <div>
                            <p className='text-base text-gray600'>Faça login ou registre-se para começar a construir</p>
                            <p className='text-base text-gray600'>seus projetos ainda hoje.</p>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div>
                        <p className='text-gray800 text-sm mb-2'>E-mail</p>
                        <input type="text" pattern=".+@\.com" className='w-351 h-14 mb-3 border-2 border-gray200 placeholder: text-gray-400 text-sm font-thin pl-4 ' placeholder='Digite seu e-mail' />
                        <div className='flex rol'>
                        <p className='text-gray800 text-sm mb-2'>Senha</p><a href="/"><span className='text-purple text-sm mb-2 ml-44'>Esqueceu a senha?</span></a>
                        </div>
                        <input type="password" className='w-351 h-14 mb-4 border-2 border-gray200 placeholder: text-gray-400 text-sm font-thin pl-4' placeholder='Digite sua senha' />
                    </div>

                    <div>
                        <button className='w-351 h-14 mb-6 rounded-md bg-purple text-white font-bold' type="submit"> Entrar </button>
                    </div>

                    <div className='flex flex-row justify-start align-baseline'>
                        <span className='text-gray600 text-base mb-2'>Ainda não tem uma conta?</span>
                        <a href="/"><span className='text-purple text-base font-extrabold mb-2 ml-1'>Inscreva-se</span></a>
                    </div>
                </div>
            </div>

        </>
    )
}