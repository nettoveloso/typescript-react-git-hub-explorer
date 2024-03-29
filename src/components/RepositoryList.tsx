import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  id: string;
  name: string;
  html_url: string;
  description: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/nettoveloso/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  },[]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {
          repositories.map( repository => {
            return <RepositoryItem key={repository.id} repository={repository} />  
          })
        }
      </ul>
    </section>
  )
}