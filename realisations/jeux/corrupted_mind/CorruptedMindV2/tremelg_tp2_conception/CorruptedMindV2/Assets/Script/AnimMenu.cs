using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class AnimMenu : MonoBehaviour
{

    public GameObject Logo;
    public GameObject BtnPlay;
    public GameObject BtnRules;

    public AudioClip LogoSound;
    public AudioClip BtnSound;

    AudioSource m_source;

    // Use this for initialization
    void Start()
    {
        //récupère le component audio source sur le gameobject
        m_source = gameObject.GetComponent<AudioSource>();
        LeanTween.moveLocalY(Logo, 130, 2f).setEaseOutBounce().setOnComplete(OnLogoAnimComplete);
    }

    // appelée lorsque le tween est terminé
    void OnLogoAnimComplete()
    {
        m_source.clip = LogoSound;
        m_source.Play();
        LeanTween.alpha(BtnPlay.GetComponent<RectTransform>(), 1f, 0.5f);
        LeanTween.alpha(BtnRules.GetComponent<RectTransform>(), 1f, 0.5f);
        BtnPlay.GetComponent<Button>().interactable = true;
        BtnRules.GetComponent<Button>().interactable = true;
    }
    //appelée lors du survol du bouton play


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
        SceneManager.LoadScene(2);
    }
}
