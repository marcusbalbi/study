package com.balbi.learning_java.collections;

import java.util.HashSet;

public class SetExample {
  
  HashSet<Person> people = new HashSet<>();

  public SetExample() {
    Person marcus = new Person("Marcus", "Balbi", 34);
   people.add(new Person("Marcus", "Balbi", 34));
    // people.add(marcus);
    people.add(marcus);

    System.out.println(people.size());
  }

}
