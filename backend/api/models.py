from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
    
class Addresses(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    address_line1 = models.TextField()
    address_line2 = models.TextField()
    city = models.TextField()
    code_postal = models.TextField()
    country = models.TextField()
    phone_number = models.TextField()

class ChinaAddresses(models.Model):
    address_line1 = models.TextField()
    address_line2 = models.TextField()
    city = models.TextField()
    state = models.TextField()
    code_postal = models.TextField()
    phone_number = models.TextField()
    
class China_bunfle(models.Model):
    pass

class Staff(models.Model):
    pass


