"use client";

import { Button, Card, Input, Label, TextField } from "@heroui/react";

export default function PlaygroundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <Card.Header>
          <Card.Title>Design System Playground</Card.Title>
          <Card.Description>
            Verificando tokens y componentes de HeroUI v3.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <TextField className="w-full" name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="email@example.com" />
          </TextField>
        </Card.Content>
        <Card.Footer>
          <Button className="w-full" onPress={() => console.log("pressed")}>
            Continuar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
