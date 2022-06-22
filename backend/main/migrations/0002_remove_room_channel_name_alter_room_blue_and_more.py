# Generated by Django 4.0.5 on 2022-06-22 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='channel_name',
        ),
        migrations.AlterField(
            model_name='room',
            name='blue',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='green',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='red',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='yellow',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
