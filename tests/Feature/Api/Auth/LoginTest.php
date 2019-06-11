<?php

namespace Tests\Feature\Api\Auth;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
        $this->user = factory(User::class)->create(['id' => 1]);
    }

    public function test_authenticate()
    {
        $response = $this->postJson(route('api.login'), [
            'email' => $this->user->email,
            'password' => 'secret'
        ]);

        $response->assertSuccessful()
            ->assertJsonStructure(['data', 'meta' => ['token']])
            ->assertJson(['meta' => ['token_type' => 'bearer']]);
    }
}
