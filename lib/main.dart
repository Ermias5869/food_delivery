import 'package:flutter/material.dart';
// Use correct package name
import 'pages/SignInPage.dart';
import 'pages/SignUpPage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'HelloFood - Auth UI',
      theme: ThemeData(fontFamily: 'Roboto', primarySwatch: Colors.blue),
      initialRoute: '/sign-in',
      routes: {
        '/sign-in': (context) => SignInPage(),
        '/sign-up': (context) => SignUpPage(),
      },
    );
  }
}
