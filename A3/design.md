# Software Design for ThreeSolidPrinciples.java

We will be splitting up the classes into the following portions:

* Main Method (main.java) - (Team Member 1)
* Interfaces (interfaces.java) - (Team Member 2)
* Manager Class (manager.java) - (Team Member 3)
* Worker Class (worker.java) - (Team Member 4)
* Robot Class (robot.java) - (Team Member 5)

## Main Method
The team member working on the main method will work implementing what the workable classes and managers will do.

## Interfaces
* Design the two interfaces: iWorkable and iFeedable. 
* By separating the two different types of interfaces, we follow the **interface separation principle.** If we place the two interfaces in one interface, robots will implement the eat() method, which they don't need to use.
- The interface separation principle states that interfaces should be separated into many specific interfaces rather than one interface that has extraneous methods that a class may not need.

## Manager Class
* Implements the iFeedable and iWorkable interfaces.
* Methods: eat(), work(), manage(), and setWorker()

## Worker Class
* Implements the iFeedable and iWorkable interfaces.
* Methods: eat() and work()

## Robot Class
* Implements the iWorkable interfaces.
* Methods: work()
    
