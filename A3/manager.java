package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

import threesolid.worker;
import threesolid.interfaces;
import threesolid.robot;

class Manager {
/* implements the iFeedable interface
 * methods: eat(), manage(), setWorker()
 */
    public void Manager() {

    }

    public void setWorker (Workable w){
        worker = w;
    }

    public void manage () {
        worker.work();
        }


}