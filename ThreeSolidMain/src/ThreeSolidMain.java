package ThreeSolidPrinciples;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

//import ThreeSolidPrinciples.worker;
//import ThreeSolidPrinciples.interfaces;
//import ThreeSolidPrinciples.robot;
//import ThreeSolidPrinciples.manager;

public class ThreeSolidMain
{

    public static Manager tsManager = new Manager();

    // The entry main() method
    // Applies to Single Responsiblity Principle since only main class will be in this file and it acts as an implementation of other classes
    //Interface Segregation Principle and Open Close Principle doesn't apply to main
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
