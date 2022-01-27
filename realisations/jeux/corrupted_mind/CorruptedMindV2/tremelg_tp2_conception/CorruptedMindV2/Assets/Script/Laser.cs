using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Laser : MonoBehaviour {

	
	// Update is called once per frame
	void Update () {
		Vector3 viewportPosition = Camera.main.WorldToViewportPoint (gameObject.transform.position);
		//Debug.Log (viewportPosition);
		if (viewportPosition.x < 0 || viewportPosition.x > 1 || viewportPosition.y < 0 || viewportPosition.y > 1) {
			//detruire le laser
			Destroy(gameObject);
		}
	}
}
