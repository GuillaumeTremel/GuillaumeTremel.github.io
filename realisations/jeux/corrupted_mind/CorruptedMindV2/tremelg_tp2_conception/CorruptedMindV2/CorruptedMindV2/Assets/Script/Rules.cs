using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Rules : MonoBehaviour {

	public GameObject Logo;
	public GameObject BtnPlay;

	public AudioClip LogoSound;
	public AudioClip BtnSound;

	AudioSource m_source;

	// Use this for initialization
	void Start () {
		//récupère le component audio source sur le gameobject
		m_source = gameObject.GetComponent<AudioSource>();
		LeanTween.moveLocalY (Logo,75, 2f).setEaseOutBounce().setOnComplete(OnLogoAnimComplete);
	}

	// appelée lorsque le tween est terminé
	void OnLogoAnimComplete () {
		m_source.clip = LogoSound;
		m_source.Play ();
		LeanTween.alpha (BtnPlay.GetComponent<RectTransform>(), 1f, 0.5f);
	}


	public void OnBtnClick()
	{
		m_source.clip = BtnSound;
		m_source.Play ();
		SceneManager.LoadScene (1);
	}
}
