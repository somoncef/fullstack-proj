package com.codewitharjun.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.codewitharjun.fullstackbackend")
public class FullstackBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackBackendApplication.class, args);
	}

}
