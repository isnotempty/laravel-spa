<?php

namespace Tests\Feature\Api\Auth;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LogoutTest extends TestCase
{
    use RefreshDatabase;

    public function test_logout()
    {
        $user = factory(User::class)->create();

        $token = $this->postJson(route('api.login'), [
            'email' => $user->email,
            'password' => 'secret'
        ])->json('meta');

        $this->actingAs($user)->postJson(route('api.logout'), [
            'token' => $token['token']
        ])->assertSuccessful();

        $this->withExceptionHandling()
            ->getJson(route('api.user'))
            ->assertStatus(401);
    }
}
