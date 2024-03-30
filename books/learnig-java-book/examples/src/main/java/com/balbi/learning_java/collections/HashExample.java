package com.balbi.learning_java.collections;

import java.util.HashMap;

public class HashExample {
  HashMap<String, Person> people = new HashMap<>();

  public HashExample() {
    Person marcus = new Person("Marcus", "Balbi", 34);
    Person julia = new Person("Julia", "Balbi", 4);
    people.put(marcus.getId(), marcus);
    people.put(julia.getId(), julia);

    System.out.println(people.containsKey("aaaa"));

  }
}
