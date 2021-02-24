import styles from '../styles/components/ChallengeBox.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function ChallengeBox(){
    // @ts-ignore
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    return (
        <div className={styles.challengesBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button"
                                className={styles.challengeFailedButton}
                                onClick={resetChallenge}
                                >
                            Falhei
                        </button>
                        <button type="button" className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafrio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de Level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}