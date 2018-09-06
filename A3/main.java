package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

import threesolid.worker;
import threesolid.interfaces;
import threesolid.robot;
import threesolid.manager;

public class ThreeSolidMain
{

    public static Manager tsManager = new Manager();

    // The entry main() method
    // Applies to Single Responsiblity Principle since only main class will be in this file and it acts as an implementation of other classes
    public static void main(String[] args)
    {

        try
        {
            System.out.format("Starting ... \n");
        }
        catch (Exception main_except)
        {
            main_except.printStackTrace();
        }

        try
        {
            System.out.format("Stopping ... \n");
        }
        catch (Exception main_except)
        {
            main_except.printStackTrace();
        }

        System.exit(0);

    }
}
