import React from 'react';
import './Home.css'; // Importe le style spécifique à la page d'accueil

const Home = () => {
    return (
        <div className="mt-3  d-flex justify-content-center">
            <div>
                <p>
                    Bienvenue sur mon portfolio d'applications, un espace où l'innovation et la créativité se
                    rencontrent pour
                    offrir des expériences numériques exceptionnelles. Explorez une variété d'applications que j'ai
                    conçues et
                    développées avec passion. Chaque application a été soigneusement élaborée pour répondre à des
                    besoins
                    spécifiques et offrir des solutions efficaces et conviviales.
                </p>
                <section id="applications">
                    <h2>Applications Disponibles :</h2>

                    <ol>
                        <li>
                            <h3>ToDo Manager :</h3>
                            <p>
                                Une application de gestion de tâches qui vous permet d'organiser vos journées de manière
                                efficace.
                                Ajoutez, supprimez et suivez vos tâches en un clin d'œil. Cette application intuitive
                                simplifie la
                                gestion de votre emploi du temps quotidien.
                            </p>
                        </li>
                        <li>
                            <h3>Météo App :</h3>
                            <p>
                                Restez informé sur les conditions météorologiques en temps réel avec notre application météo conviviale.
                                Obtenez des prévisions précises, vérifiez la température actuelle, les précipitations, et les prévisions à venir
                                pour votre emplacement ou n'importe quelle autre ville dans le monde. Soyez prêt pour chaque journée avec notre
                                application météo simple et facile à utiliser.
                            </p>
                        </li>
                        <li>
                            <h3>Cocktail Explorer :</h3>
                            <p>
                                Plongez dans le monde des cocktails avec notre application Cocktail Explorer. Découvrez une variété infinie de
                                recettes, des classiques intemporels aux créations modernes. Apprenez à mélanger, agiter et servir des boissons
                                exquises pour impressionner vos amis. Explorez les ingrédients, les techniques et les histoires derrière chaque
                                cocktail. Que vous soyez un amateur ou un barman professionnel, cette application vous guidera à travers le
                                monde coloré des cocktails.
                            </p>
                        </li>

                    </ol>
                </section>
            </div>
        </div>
    );
};

export default Home;
