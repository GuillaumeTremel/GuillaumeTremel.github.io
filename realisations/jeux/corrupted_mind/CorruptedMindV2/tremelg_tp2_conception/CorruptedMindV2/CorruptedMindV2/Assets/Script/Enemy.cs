using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Enemy : MonoBehaviour
{

    public GameObject Target;

    public GameObject Fin1;

    public GameObject BtnPlay;

    public GameObject BtnMenu;

    public AudioClip BtnSound;

    public float Life = 1f;

    public AudioClip EndSound;

    public AudioSource m_source;

    Rigidbody2D _body;

    public bool Victory = false;

    public SpaceShip ScriptCannon;

    void Start()
    {
        //récupère le component audio source sur le gameobject
        m_source = gameObject.GetComponent<AudioSource>();

    }
    //détecter si un collider entre dans le trigger de l'ennemi
    void OnTriggerEnter2D(Collider2D col)
    {


        if (col.gameObject.tag == "laserShip")
        {

            //est-ce un laser du vaisseau?
            //placer une explosion à l'endroit du contact


            //détruis le laser

            //enlever de la vie
            Life -= 1f;

            //vérifier s'il reste de la vie
            if (Life <= 0)
            {

                m_source.clip = EndSound;
                m_source.Play();
                LeanTween.moveLocalY(Fin1, 87, 2f).setEaseOutBounce().setOnComplete(OnLogoAnimComplete);
                Victory = true;

                print(ScriptCannon);//champText.text = "Vous avez pris " + ScriptCannon.totalTry + " essais";

            }
        }
    }
    void OnLogoAnimComplete()
    {
        LeanTween.alpha(Fin1.GetComponent<RectTransform>(), 1f, 0.5f);
        LeanTween.alpha(BtnPlay.GetComponent<RectTransform>(), 1f, 0.5f);
        LeanTween.alpha(BtnMenu.GetComponent<RectTransform>(), 1f, 0.5f);
        //affichage du score 

    }

    public void OnBtnClick()
    {
        m_source.clip = BtnSound;
        m_source.Play();
        SceneManager.LoadScene(1);
    }

    public void OnBtnClick2()
    {
        m_source.clip = BtnSound;
        m_source.Play();
        SceneManager.LoadScene(0);
    }



}
