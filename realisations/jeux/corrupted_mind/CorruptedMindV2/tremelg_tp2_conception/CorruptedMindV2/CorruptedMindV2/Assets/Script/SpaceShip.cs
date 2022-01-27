using System.Collections;
using System.Collections.Generic;
using UnityEngine;
/// <summary>
/// Script pour gérer un vaisseau 2D en top-view
/// </summary>
public class SpaceShip : MonoBehaviour
{
    //vitesse déplacement
    public float Speed = 300f;
    //vitesse de rotation
    public float TurnSpeed = 1f;
    //prefab du laser
    public GameObject LaserPrefab;
    //emplacement d'ou part le laser
    public Transform LaserStartPosition;
    //vitesse du laser
    public float LaserSpeed = 0.5f;
    // point de vie vaisseau
    public float Life = 100f;

    public Rigidbody2D bulletPrefabLeft;

    public Rigidbody2D bulletPrefabRight;

    public bool canShoot = true;
    //prefab explosion
    public GameObject PrefabExplosion;

    public AudioClip ShootSound;

    Rigidbody2D _body;

    AudioSource m_source;

    public int totalTry = 0;
    public int tryLimit = 5;

    public GameObject Fin2;

    public Enemy scriptEnnemy;


    // Use this for initialization
    void Start()
    {
        // récupère le component RigidBody2D du vaisseau
        _body = gameObject.GetComponent<Rigidbody2D>();
        m_source = gameObject.GetComponent<AudioSource>();


    }

    // Update is called once per frame
    void Update()
    {
        float angle = gameObject.transform.rotation.eulerAngles.z;
        print(angle);
        //détecter touches pour tourner à gauche
        if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.UpArrow))
        {

            if (angle < 180)
            {
                gameObject.transform.Rotate(Vector3.forward, TurnSpeed);
            }

        }
        else if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.DownArrow))
        {

            if (angle > 85)
            {
                gameObject.transform.Rotate(Vector3.forward, -TurnSpeed);
            }
        }



        //détecter si souris cliquée et lancer un laser
        if (Input.GetMouseButtonDown(0))
        {
            totalTry++;

            if (scriptEnnemy.Victory != true && totalTry < tryLimit)
            {
                GameObject laser = Instantiate(LaserPrefab, LaserStartPosition.position, gameObject.transform.rotation) as GameObject;

                //récupérer le rigibody2d

                laser.GetComponent<Rigidbody2D>().AddForce(-gameObject.transform.up * LaserSpeed, ForceMode2D.Impulse);

                m_source.clip = ShootSound;
                m_source.Play();
                Instantiate(PrefabExplosion, LaserStartPosition.position, Quaternion.identity);

                //verifier qcombien de coup ont été faits 



            }
            else
            {
                if (!scriptEnnemy.Victory)
                {
                    //ok toutes les essaie ont été faits
                    // affciher le message de gameover
                    print("perdu");
                }

            }


        }
    }
}


