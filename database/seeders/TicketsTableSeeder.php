<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Seeder;

class TicketsTableSeeder extends Seeder {
    public function run(): void {
        $tickets = [
            ['title' => 'Computer not booting', 'description' => 'The computer fails to boot up properly, showing no signs of power despite being plugged in. This issue might be related to power supply or motherboard.', 'user_id' => User::where('email', 'customer1@example.com')->first()->id, 'category_id' => Category::where('name', 'Computer Hardware Issues')->first()->id, 'status' => 'open'],
            ['title' => 'Software installation failure', 'description' => 'Unable to install necessary software due to compatibility issues or missing dependencies. The installer fails to proceed.', 'user_id' => User::where('email', 'customer1@example.com')->first()->id, 'category_id' => Category::where('name', 'Computer Software Issues')->first()->id, 'status' => 'backlog'],
            ['title' => 'Printer not connecting', 'description' => 'Printer fails to connect to the computer despite being properly plugged in and powered on. The device is not recognized by the operating system.', 'user_id' => User::where('email', 'customer2@example.com')->first()->id, 'category_id' => Category::where('name', 'Printer Connectivity Issues')->first()->id, 'status' => 'open'],
            ['title' => 'Frequent paper jams', 'description' => 'Printer frequently jams when printing documents. The paper gets stuck inside the printer and needs to be manually removed.', 'user_id' => User::where('email', 'customer2@example.com')->first()->id, 'category_id' => Category::where('name', 'Printer Paper Jams')->first()->id, 'status' => 'open'],
            ['title' => 'Router setup problem', 'description' => 'Unable to configure the router for internet access. The setup wizard fails to detect the internet connection and provide proper settings.', 'user_id' => User::where('email', 'customer1@example.com')->first()->id, 'category_id' => Category::where('name', 'Router Configuration Issues')->first()->id, 'status' => 'backlog'],
            ['title' => 'Unstable router connection', 'description' => 'Router connection drops frequently, resulting in intermittent loss of internet access. This issue affects multiple devices connected to the network.', 'user_id' => User::where('email', 'customer2@example.com')->first()->id, 'category_id' => Category::where('name', 'Router Connectivity Issues')->first()->id, 'status' => 'open']
        ];

        foreach ($tickets as $ticket) {
            Ticket::create($ticket);
        }
    }
}
