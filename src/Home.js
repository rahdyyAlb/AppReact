import React from 'react';
import './Home.css'; // Importe le style spécifique à la page d'accueil

const Home = () => {
    return (
        <div className="mt-3 w-75  d-flex justify-content-center">
            <div>
                <p>
                    Bienvenue sur mon portfolio d'applications, un espace où l'innovation et la créativité se rencontrent pour
                    offrir des expériences numériques exceptionnelles. Explorez une variété d'applications que j'ai conçues et
                    développées avec passion. Chaque application a été soigneusement élaborée pour répondre à des besoins
                    spécifiques et offrir des solutions efficaces et conviviales.
                </p>
                <section id="applications">
                    <h2>Applications Disponibles :</h2>

                    <ol>
                        <li>
                            <h3>ToDo Manager :</h3>
                            <p>
                                Une application de gestion de tâches qui vous permet d'organiser vos journées de manière efficace.
                                Ajoutez, supprimez et suivez vos tâches en un clin d'œil. Cette application intuitive simplifie la
                                gestion de votre emploi du temps quotidien.
                            </p>
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default Home;
