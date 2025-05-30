provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "devops_server" {
  ami                    = "ami-0c02fb55956c7d316"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.devops_key.key_name
  vpc_security_group_ids = [aws_security_group.devops_sg.id]

  tags = {
    Name = "DevOpsInterviewServer"
  }
}


# EC2 IP çıktısı
output "instance_ip" {
  value = aws_instance.devops_server.public_ip
}
