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
This team member will design the two interfaces, iWorkable and iFeedable. By separating the two different types of interfaces, we follow the **interface separation principle.** If we place the two interfaces in one interface, robots will implement the eat() method, which they don't need to use.

The interface separation principle states that interfaces should be separated into many specific interfaces rather than one interface that has extraneous methods that a class may not need.

## Manager Class
This team member will design the manager class, which can maange and set workers to work. The manager class also needs to eat and work, so it should also implement the iFeedable and iWorkable interfaces.

## Worker Class
This team member will design the worker, which implements the iFeedable and iWorkable interfaces.

## Robot Class
This team member will design the robot, which implements the iWorkable interfaces.
