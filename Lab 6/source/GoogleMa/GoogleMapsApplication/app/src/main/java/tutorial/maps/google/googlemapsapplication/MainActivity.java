package tutorial.maps.google.googlemapsapplication;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;

public class MainActivity extends AppCompatActivity {
    Button  button_register;
    ImageButton button_photo;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
       // getActionBar().setTitle("Home page");
      button_photo = (ImageButton) findViewById(R.id.id_imageButton);
        button_register = (Button) findViewById(R.id.bregister);

    }

    public void onImageClick(View v) {
        //This code redirects the from main page to the maps page.
        Intent redirect = new Intent(MainActivity.this, photobutton.class);
        startActivity(redirect);
    }

    public void onRegister(View v) {
        //This code redirects to the photo activity.
        Intent redirect = new Intent(MainActivity.this, MapsActivity.class);
        startActivity(redirect);
    }




}
