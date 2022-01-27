using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AutoDestroy : MonoBehaviour {

	// Use this for initialization
	void Start () {
		//attendre un délai avant de détruire l'objet (animation)
		Destroy(gameObject, 1f);
	}
}
