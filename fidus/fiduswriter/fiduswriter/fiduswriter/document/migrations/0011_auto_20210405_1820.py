# Generated by Django 3.1.4 on 2021-04-05 16:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("contenttypes", "0002_remove_content_type_name"),
        ("document", "0010_accessright_path"),
    ]

    operations = [
        migrations.AddField(
            model_name="accessright",
            name="holder_id",
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AddField(
            model_name="accessright",
            name="holder_type",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="contenttypes.contenttype",
            ),
        ),
        migrations.AlterUniqueTogether(
            name="accessright",
            unique_together={("document", "holder_type", "holder_id")},
        ),
    ]
